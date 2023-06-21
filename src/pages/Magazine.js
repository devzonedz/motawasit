import { Box, Button, Container, Image, Stack } from '@chakra-ui/core';
import { VStack } from '@chakra-ui/react';

import englishMagazine from '../images/food-and-religion-en.jpg';
import italianMagazine from '../images/food-and-religion-it.jpg';
import { downloadFile } from '../util/download';
import { MagazineIcon } from '../components/MagazineIcon';

const magazineEnFileUrl = '/files/food-and-religion-en.pdf';
const magazineItFileUrl = "/files/food-and-religion-it.pdf"

export default function Magazine() {
    return (
        <Container py={{ base: 14, md: 20, lg: 32 }} maxW="container.lg">
            <Stack
                direction={{ base: 'column', md: 'row' }}
                justify="space-between"
                spacing="32px"
                dir="ltr"
            >
                <VStack align="flex-start" spacing={12}>
                    <Image src={englishMagazine} alt="Jusur - Food & Religion English Version" />

                    <Button
                        bgColor="blackAlpha.900"
                        color="white"
                        _hover={{
                            bgColor: "blackAlpha.700"
                        }}
                        _active={{
                            bgColor: "blackAlpha.900"
                        }}
                        w="full"
                        onClick={() => downloadFile(magazineEnFileUrl)}
                    >
                        Download English Version
                    </Button>
                </VStack>
                <VStack align="flex-start" spacing={12}>
                    <Image src={italianMagazine} alt="Jusur - Food & Religion Italian Version" />

                    <Button
                        bgColor="blackAlpha.900"
                        color="white"
                        _hover={{
                            bgColor: "blackAlpha.700"
                        }}
                        _active={{
                            bgColor: "blackAlpha.900"
                        }}
                        w="full"
                        onClick={() => downloadFile(magazineItFileUrl)}
                    >
                        Download Italian Version
                    </Button>
                </VStack>
            </Stack>
        </Container>
    );
}