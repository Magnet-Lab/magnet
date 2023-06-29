/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Box from '@mui/joy/Box'
import { useState } from 'react';

interface PivotListProps {
    pivid : string
	pivotlist: string
}

function PivotList({ pivid, pivotlist }: PivotListProps) {

    const [piv, setPiv] = useState<PivotListProps[]>([]);

	return (
		<Box>
			{piv !== undefined ? (
            <Box 
            width='30vw'
            border={1}
            borderColor='darkgray'
            borderRadius={5}
            textAlign='center'

            >
                {piv.map((eachpiv) => (
                    <Box key={eachpiv.pivid}>
                        <h2>{eachpiv.pivotlist}</h2>
                    </Box>
                ))}
                <h2>piv</h2>
            </Box>
            )
            : (
            <Box>
                <h2>No pivotlist</h2>
            </Box>    
            )}
		</Box>
	)
}

export default PivotList
