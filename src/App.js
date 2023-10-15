import { Center } from '@chakra-ui/react'
import './App.css'
import MyForm from './MyForm'
import MyFormWithContext from './MyFormWithContext'
import { FormProvider, useForm } from 'react-hook-form'

function App() {
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

	const formMethods = useForm({
		defaultValues: {
			companyName: 'Google',
		},
	})

	return (
		<div className='App'>
			<Center h='100vh'>
				{/* <MyForm /> */}
				<FormProvider {...formMethods}>
					<MyFormWithContext />
				</FormProvider>
			</Center>
		</div>
	)
}

export default App
