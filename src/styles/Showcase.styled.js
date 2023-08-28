import styled from "styled-components";

export const ShowcaseParticleContainer = styled.div`
    position: relative;

`

export const ShowcaseImageCard = styled.div`
    border: 1px solid white;
    width: max-content;
    padding-top: 2rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}){
        width: 98%;
        margin: auto;
        margin-top: 5rem;
    }  
`

export const Particle = styled.img`
    position: absolute;
    top: ${({top}) => top};    
    left: ${({left}) => left};    
    right: ${({right}) => right};    
    bottom: ${({bottom}) => bottom};
    transform: rotate(${({rotate}) => rotate});  

    @media(max-width: ${({theme}) => theme.breakpoints.mobile}){
        top: ${({responsiveTop}) => responsiveTop};    
        left: ${({responsiveLeft}) => responsiveLeft};    
        right: ${({responsiveRight}) => responsiveRight};    
        bottom: ${({responsiveBottom}) => responsiveBottom};
    }
`