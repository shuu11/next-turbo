import { Image } from '@/next'
import { Box, Flex, Button } from '@/components'

export default function Home() {
	return (
		<>
			<div>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					By <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
				</a>
			</div>

			<Box backgroundColor={{ base: 'red' }} marginTop={{ base: '20px' }}>
				sadfasd
			</Box>
			<Flex
				width={{ base: '100%', md: '1040px' }}
				justifyContent="space-around"
				alignItems="center"
				flexDirection={{ base: 'column', md: 'row' }}>
				<Box backgroundColor="green">本</Box>
				<Box>図鑑</Box>
				<Box>ノート</Box>
			</Flex>

			<Button backgroundColor="blue" margin="2px" padding="20px">
				sssss
			</Button>
		</>
	)
}
