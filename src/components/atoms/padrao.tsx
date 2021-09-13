import {
    Container as ChakraContainer,
    ContainerProps as ChakraContainerProps,
  } from '@chakra-ui/react'
  import React from 'react'
  
  type PickedContainerProps = Pick<
    ChakraContainerProps,
    | 'centerContent'
    | 'maxW'
    | 'maxH'
    | 'marginTop'           /// PICKS e OMITS
    | 'paddingY'
    | 'paddingX'
    | 'padding'
    | 'width'
    | 'height'
    | 'overflow'
  >
  interface ContainerProps extends PickedContainerProps {} // interface
  
  const Container: React.FC<ContainerProps> = ({
    children,
    paddingY = '0', // react FC 
    paddingX = '0',
    ...otherProps
  }) => {
      // CONTENT !
    return (
      <ChakraContainer {...otherProps} maxW="container.xl">
        {children}
      </ChakraContainer>
    )
  }
  
  export default Container
  