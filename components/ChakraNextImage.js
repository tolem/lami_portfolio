import { Box } from '@chakra-ui/react'
import * as React from 'react'
import NextImage from 'next/image'

export const ChakraNextImage = (props) => {
    const { src, alt, ...rest } = props
    return (
        <Box
            position="relative"
            {...rest}
        >
            <NextImage
                objectFit="cover"
                layout="fill"
                src={src}
                alt={alt}
                style={{ borderRadius: 10 }}
            />
        </Box>
    )
}