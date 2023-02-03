import React from 'react'
//import {bar_data} from './bar_data'
import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react'

const Bar = () => {

    const[data, setData]= useState([]);

  
    useEffect(()=>
    {
      const fetchData= async()=>
      {
         const url ='http://127.0.0.1:5000/chart/bar'
         fetch(url,{
             method:'GET'
         }). then(response=>response.json())
           .then(json=>
             {
                setData(json)
             }
 );
      }
          fetchData();
    },[])
 


  return (
    <div style={{  paddingTop: "40px" }}>
    <div style={{ height: "400px" }} pt="5rem" >
    <h2 >My Awesome Bar Chart</h2>

    <ResponsiveBar
        data={data}
        keys={[
            "0-1 year", 
            "1-3 years", 
            "3-6 years",
             "6-12 years", 
             "12-20 years", 
             "20+ years"
        ]}
        indexBy="location"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Job Locations',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Experience in years',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
 
    </div>
    </div>
  

   
    
    
    
  )
}

export default Bar