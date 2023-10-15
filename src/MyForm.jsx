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
import { useForm } from 'react-hook-form'

const MyForm = () => {
	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

	const getAsyncValues = async () => {
		await sleep(2000)

		return {
			name: 'Jack',
			gender: 'female',
			email: 'asm@gmailc.om',
			password: '123456',
		}
	}

	const {
		handleSubmit,
		register,
		formState: {
			errors,
			isSubmitting,
			isDirty,
			dirtyFields,
			isSubmitted,
			isValid,
		},
	} = useForm({
		// defaultValues: {
		// 	name: 'Anjan',
		// 	gender: 'male',
		// 	email: '',
		// 	password: '',
		// },
		defaultValues: getAsyncValues, // Get async values
	})

	const onSubmit = async data => {
		console.log(data)
		await sleep(2000)
		if (data) {
			alert(JSON.stringify(data))
		} else {
			alert('There is an error')
		}
	}

	return (
		<Box maxW='500' w='90%'>
			<Heading mb='5'>My Form</Heading>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack>
					<FormControl isInvalid={errors.name}>
						<FormLabel htmlFor='name'>Name</FormLabel>
						<Input
							id='name'
							placeholder='Name'
							{...register('name', {
								required: 'This field is required',
								minLength: {
									value: 10,
									message: 'Minimum length should be 10',
								},
							})}
						/>
						<FormErrorMessage>
							{errors.name && errors.name.message}
						</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={errors.gender}>
						<FormLabel htmlFor='gender'>Gender</FormLabel>
						<Select
							placeholder='Gender'
							{...register('gender', {
								required: 'This field is required',
							})}
						>
							<option value='male'>Male</option>
							<option value='female'>Female</option>
						</Select>
						<FormErrorMessage>
							{errors.gender && errors.gender.message}
						</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={errors.email}>
						<FormLabel>Email</FormLabel>
						<Input
							type='text'
							placeholder='Email'
							{...register('email', {
								required: 'Email is required',
								pattern: {
									value: /^\S+@\S+$/i,
									message: 'Invalid email format',
								},
							})}
						/>
						<FormErrorMessage>
							{errors.email && errors.email.message}
						</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={errors.password}>
						<FormLabel>Password</FormLabel>
						<Input
							type='password'
							placeholder='Password'
							{...register('password', {
								maxLength: {
									value: 32,
									message: 'The max length has to be 32',
								},
								minLength: {
									value: 6,
									message: 'The minimum length has to be 6',
								},
								required: 'Password is required',
							})}
						/>
						<FormErrorMessage>
							{errors.password && errors.password.message}
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

export default MyForm
