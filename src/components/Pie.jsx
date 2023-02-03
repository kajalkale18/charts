import React from 'react'
//import {piedata} from './piedata'
import { ResponsivePie } from '@nivo/pie'
import { useEffect, useState } from 'react'

const Pie = () => {

     const[data, setData]= useState([]);


   useEffect(()=>
   {
     const fetchData= async()=>
     {
        const url ='http://127.0.0.1:5000/chart/add'
        fetch(url,{
            method:'GET'
        }). then(response=>response.json())
          .then(json=>
            {
               setData(json)
            }
);
        //    then(data => {
        //      console.log("Api data", data)
        //      const res = data.json();
        //      return res
        // }).then((res)=>{
        //     console.log("resss", res)
        
        // }).catch(e=>{
        //     console.log("error",e)
        // })
     }
         fetchData();
   },[])

  return (

        <div style={{  paddingTop: "10px" }}>
        <div style={{ height: "400px" }} pt="5rem">
          <h2 >My Awesome Pie Chart</h2>

          <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'pune'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'mumbai'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'banglore'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'hyderabad'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'delhi'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
             
        </div>
        </div>
    
  )
}

export default Pie