import { Image, Link } from '@/next'
import {
	/**
	 * Atoms
	 */
	Box,
	BreadcrumbItem,
	Badge,
	Flex,
	Button,
	AppLogo,
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
	Input,
	RectLoader,
	Separator,
	Spinner,
	Text,
	TextArea,

	/**
	 * Molecules
	 */
	BadgeIconButton,
	Breadcrumb,
	CheckBox,
	Dropdown,
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

			<Input></Input>

			<RectLoader width={300} height={30}></RectLoader>

			<Separator>or</Separator>
			<Separator>and</Separator>

			<Spinner size={30}></Spinner>
			<TextArea placeholder="最高の商品です！"></TextArea>

			<BadgeIconButton icon={<PersonOutlineIcon size={30} />}></BadgeIconButton>

			<Breadcrumb>
				<BreadcrumbItem>
					<Link href="/">トップ</Link>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<Link href="/">カート</Link>
				</BreadcrumbItem>
			</Breadcrumb>

			<CheckBox label={'チェックボックスです'} checked={true}></CheckBox>

			<Dropdown
				options={[
					{ value: 'shoes', label: 'シューズ' },
					{ value: 'clothes', label: 'トップス' },
					{ value: 'book', label: '本' },
				]}
				value={'shoes'}
				placeholder="カテゴリを選択して下さい"></Dropdown>
		</>
	)
}
