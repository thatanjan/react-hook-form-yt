import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from '@chakra-ui/react'
import { useForm, Controller } from 'react-hook-form'

const MyForm = () => {
	const {
		// handleSubmit,
		register,
		formState: { errors, isSubmitting },
		getValues,
		watch,
	} = useForm()

	const onSubmit = values => {
		console.log(values)
	}

	const { handleSubmit, control, reset } = useForm({
		defaultValues: {
			MyCheckbox: false,
			Asmaa: false,
		},
	})

	// console.log(control)

	const reg = register('name', {
		required: 'This is required',
		minLength: { value: 4, message: 'Minimum length should be 4' },
	})

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name='MyCheckbox'
				control={control}
				rules={{ required: true }}
				render={({ field }) => {
					console.log('asma', field)
					return <Input {...field} />
				}}
			/>

			<h1>{watch('name')}</h1>

			<FormControl isInvalid={errors.name}>
				<FormLabel htmlFor='name'>First name</FormLabel>
				<Input id='name' placeholder='name' {...reg} />
				<FormErrorMessage>
					{errors.name && errors.name.message}
				</FormErrorMessage>
			</FormControl>
			<Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
				Submit
			</Button>
		</form>
	)
}

export default MyForm
