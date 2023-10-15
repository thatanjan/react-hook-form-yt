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
import { useFormContext } from 'react-hook-form'

const MyFormWithContext = () => {
	const {
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
		register,
	} = useFormContext()

	const onSubmit = values => {
		console.log(values)
	}

	return (
		<Box maxW='500' w='90%'>
			<Heading mb='5'>My Form</Heading>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack>
					<FormControl isInvalid={errors.companyName}>
						<FormLabel htmlFor='companyName'>Company Name</FormLabel>
						<Input
							id='companyName'
							placeholder='Company Name'
							{...register('companyName', {
								required: 'This field is required',
								minLength: {
									value: 5,
									message: 'Minimum length should be 5',
								},
							})}
						/>
						<FormErrorMessage>
							{errors.companyName && errors.companyName.message}
						</FormErrorMessage>
					</FormControl>

					<Button
						mt={4}
						colorScheme='teal'
						isLoading={isSubmitting}
						type='submit'
						isDisabled={!isValid}
					>
						Submit
					</Button>
				</Stack>
			</form>
		</Box>
	)
}

export default MyFormWithContext
