import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
} from '@chakra-ui/core';
import { VStack } from '@chakra-ui/react';

import { downloadFile } from '../util/download';
import { useState } from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';

const magazineEnFileUrl = '/files/food-and-religion-en.pdf';
const magazineItFileUrl = '/files/food-and-religion-it.pdf';

export default function Magazine() {
  const [imagesIsLoading, setImagesIsLoading] = useState({
    en: false,
    it: false,
  });

  return (
    <Container py={{ base: 14, md: 20, lg: 32 }} maxW="container.lg">
      <Heading mb={6}>العدد صفر</Heading>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        spacing="32px"
        dir="ltr"
      >
        <VStack align="stretch" spacing={12} flex={1}>
          <Skeleton
            isLoaded={imagesIsLoading.en}
            minH={{ base: 490, md: 510, lg: 720 }}
            w="full"
          >
            <Image
              src="/food-and-religion-en.jpg"
              alt="Jusur - Food & Religion English Version"
              onLoad={() => setImagesIsLoading(prev => ({ ...prev, en: true }))}
            />
          </Skeleton>

          <Stack direction={{ base: 'column', sm: 'row' }} spacing={2}>
            <Button
              leftIcon={<FaDownload />}
              bgColor="blackAlpha.900"
              color="white"
              _hover={{
                bgColor: 'blackAlpha.700',
              }}
              _active={{
                bgColor: 'blackAlpha.900',
              }}
              w="full"
              onClick={() => downloadFile(magazineEnFileUrl)}
            >
              Download English Version
            </Button>

            <Box w="full">
              <a
                href="https://admin.almutawassit.it/jusur-0-en"
                target="_blank"
              >
                <Button
                  leftIcon={<FaEye />}
                  bgColor="blackAlpha.900"
                  color="white"
                  _hover={{
                    bgColor: 'blackAlpha.700',
                  }}
                  _active={{
                    bgColor: 'blackAlpha.900',
                  }}
                  w="full"
                >
                  Explore the magazine
                </Button>
              </a>
            </Box>
          </Stack>
        </VStack>
        <VStack align="stretch" spacing={12} flex={1}>
          <Skeleton
            isLoaded={imagesIsLoading.it}
            minH={{ base: 490, md: 510, lg: 720 }}
            w="full"
          >
            <Image
              src="food-and-religion-it.jpg"
              alt="Jusur - Food & Religion Italian Version"
              onLoad={() => setImagesIsLoading(prev => ({ ...prev, it: true }))}
            />
          </Skeleton>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={2}>
            <Button
              leftIcon={<FaDownload />}
              bgColor="blackAlpha.900"
              color="white"
              _hover={{
                bgColor: 'blackAlpha.700',
              }}
              _active={{
                bgColor: 'blackAlpha.900',
              }}
              w="full"
              onClick={() => downloadFile(magazineItFileUrl)}
            >
              Download Italian Version
            </Button>

            <Box w="full">
              <a
                href="https://admin.almutawassit.it/jusur-0-it"
                target="_blank"
              >
                <Button
                  leftIcon={<FaEye />}
                  bgColor="blackAlpha.900"
                  color="white"
                  _hover={{
                    bgColor: 'blackAlpha.700',
                  }}
                  _active={{
                    bgColor: 'blackAlpha.900',
                  }}
                  w="full"
                >
                  Sfoglia la rivista
                </Button>
              </a>
            </Box>
          </Stack>
        </VStack>
      </Stack>
    </Container>
  );
}
