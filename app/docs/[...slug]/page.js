import React from 'react'

const DocFeaturePage = ({params}) => {
    //  console.log(params.slug[0])
    //  console.log(params.slug[1])
    const slugLength = params.slug?.length || 0;
// console.log(slugLength);
     
    if(slugLength === 1){
        return <div>Viwing doec for feature :{params.slug[0]} and concepts: {params.slug[1]}</div>
    } else if(slugLength === 0){
        return <div>Viwing all docs{params.slug[0]}</div>
    } else  if(slugLength === 2){
        return <div>Viwing doec for feature :{params.slug[0]} and concepts: {params.slug[1]} and present:{params.slug[2]}</div>
    }
    return <div>DocFeaturePageddddddd</div>
}
export default DocFeaturePage