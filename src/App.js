import { Center } from '@chakra-ui/react'
import './App.css'
import MyForm from './MyForm'
import { useForm, FormProvider } from 'react-hook-form'
import MyFormWithContext from './MyFormWithContext'

import { DevTool } from '@hookform/devtools'

function App() {
	const formMethods = useForm({
		defaultValues: {
			companyName: 'Google',
		},
	})

	console.log('watch', formMethods.watch())

	return (
		<div className='App'>
			<Center h='100vh'>
				<MyForm />
				<FormProvider {...formMethods}>
					<MyFormWithContext />
				</FormProvider>
				<DevTool control={formMethods.control} />{' '}
			</Center>
		</div>
	)
}

export default App
