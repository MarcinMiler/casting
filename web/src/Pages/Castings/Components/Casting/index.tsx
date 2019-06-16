import * as React from 'react'

import { StyledLink } from 'Components'
import CC from 'Images/cc.jpg'
import {
    Container,
    Image,
    ContentWrapper,
    CastingTitle,
    Row,
    BuildingIcon,
    SmallText,
    LocationIcon
} from './style'

interface Props {
    casting: any
}

export const Casting: React.FC<Props> = ({ casting }) => (
    <StyledLink to={`/casting/${casting.id}`}>
        <Container data-testid="casting-item">
            <Image src={CC} />

            <ContentWrapper>
                <CastingTitle>{casting.title}</CastingTitle>
                <Row>
                    <Row>
                        <BuildingIcon />

                        <SmallText>CC Chanel</SmallText>

                        <LocationIcon />

                        <SmallText>{casting.city}</SmallText>
                    </Row>
                </Row>
            </ContentWrapper>
        </Container>
    </StyledLink>
)

export * from './CastingsPlaceholder'
