import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Select,
	Stack,
} from '@chakra-ui/react'

const MyForm = () => {
	// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

	// const getAsyncValues = async () => {
	// 	await sleep(2000)
	//
	// 	return {
	// 		name: 'Jack',
	// 		gender: 'female',
	// 		email: 'asm@gmailc.om',
	// 		password: '123456',
	// 	}
	// }

	// const onSubmit = async data => {
	// 	await sleep(2000)
	// 	if (data) {
	// 		alert(JSON.stringify(data))
	// 	} else {
	// 		alert('There is an error')
	// 	}
	// }

	const errors = {}

	return (
		<Box maxW='500' w='90%'>
			<Heading mb='5'>My Form</Heading>
			<form>
				<Stack>
					<FormControl isInvalid={errors.name}>
						<FormLabel htmlFor='name'>Name</FormLabel>
						<Input id='name' placeholder='Name' />
						<FormErrorMessage>
							{errors.name && errors.name.message}
						</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={errors.gender}>
						<FormLabel htmlFor='gender'>Gender</FormLabel>
						<Select placeholder='Gender'>
							<option value='male'>Male</option>
							<option value='female'>Female</option>
						</Select>
						<FormErrorMessage>
							{errors.gender && errors.gender.message}
						</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={errors.email}>
						<FormLabel>Email</FormLabel>
						<Input type='text' placeholder='Email' />
						<FormErrorMessage>
							{errors.email && errors.email.message}
						</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={errors.password}>
						<FormLabel>Password</FormLabel>
						<Input type='password' placeholder='Password' />
						<FormErrorMessage>
							{errors.password && errors.password.message}
						</FormErrorMessage>
					</FormControl>

					<Button mt={4} colorScheme='teal' type='submit'>
						Submit
					</Button>
				</Stack>
			</form>
		</Box>
	)
}

export default MyForm
