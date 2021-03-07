import SpaceLaunch from '../../component/spaceLaunch';


const Filter = (prop) => {
  console.log(prop);

  return(
    <>
        <SpaceLaunch {...prop} />
    </>
  )
}


export async function getServerSideProps({params: {id}}) {
    let newUrl = '', fId = id != undefined && id != "" && id != null ? id.toLowerCase(): id;
    
    console.log(id, ": ", fId);

    if(fId == 'launch=true'){
        newUrl = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true`;
    }
    else if(fId == 'launch=false'){
        newUrl = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=false`;
    }
    else if(fId == 'landing=true'){
        newUrl = `https://api.spaceXdata.com/v3/launches?limit=100&land_success=true`;
    }
    else if(fId == 'landing=false'){
        newUrl = `https://api.spaceXdata.com/v3/launches?limit=100&land_success=false`;
    }
    else {
        newUrl = `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${id}`
    }




    // Fetch data from external API
    const res = await fetch(newUrl)
    const data = await res.json()

    // Pass data to the page via props
    return {
        props: {data: data}
    }
}




export default Filter;