import { Image, Link } from '@/next'
import {
	Box,
	BreadcrumbItem,
	Badge,
	Flex,
	Button,
	AppLogo,
	Text,
	CloseIcon,
	SearchIcon,
	CloudUploadIcon,
	CancelIcon,
	CheckBoxOutlineBlankIcon,
	CheckBoxIcon,
	PersonIcon,
	GitHubIcon,
	PersonOutlineIcon,
	ShoppingCartIcon,
} from '@/components'

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

			<Link href="/" passHref>
				<AppLogo />
			</Link>

			<Text>sdfasdfa</Text>

			<Badge content="1" backgroundColor="blue"></Badge>

			<BreadcrumbItem>
				<Link href="/">1</Link>
			</BreadcrumbItem>
			<BreadcrumbItem>
				<Link href="/">2</Link>
			</BreadcrumbItem>
			<BreadcrumbItem>
				<Link href="/">3</Link>
			</BreadcrumbItem>
			<BreadcrumbItem>
				<Link href="/">4</Link>
			</BreadcrumbItem>

			<CloseIcon size={30} backgroundColor="yellow" />
			<SearchIcon size={30} backgroundColor="yellow" />
			<CloudUploadIcon size={30} backgroundColor="yellow" />
			<CancelIcon size={30} backgroundColor="yellow" />
			<CheckBoxOutlineBlankIcon size={30} backgroundColor="yellow" />
			<CheckBoxIcon size={30} backgroundColor="yellow" />
			<PersonIcon size={30} backgroundColor="yellow" />
			<GitHubIcon size={30} backgroundColor="yellow" />
			<PersonOutlineIcon size={30} backgroundColor="yellow" />
			<ShoppingCartIcon size={30} backgroundColor="yellow" />
		</>
	)
}
