import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Stack,
} from '@chakra-ui/react'

const MyFormWithContext = () => {
	// const onSubmit = values => {
	// 	console.log(values)
	// }

	const errors = {}

	return (
		<Box maxW='500' w='90%'>
			<Heading mb='5'>My Form</Heading>
			<form>
				<Stack>
					<FormControl isInvalid={errors.companyName}>
						<FormLabel htmlFor='companyName'>Company Name</FormLabel>
						<Input id='companyName' placeholder='Company Name' />
						<FormErrorMessage>
							{errors.companyName && errors.companyName.message}
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

export default MyFormWithContext
