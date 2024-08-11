import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [tabValue, setTabValue] = useState<string>('All')

  const handleTabChange = (value: string) => {
    setTabValue(value)
  }
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs.Root defaultValue="All" onValueChange={handleTabChange}>
          <Tabs.List className="mt-10 flex items-center gap-x-2">
            <Tabs.Trigger className={`rounded-full border-2 border-solid border-gray-200 px-7 py-2 ${tabValue === 'All' ? 'bg-gray-700 text-white' : 'text-dark bg-white'}`} value="All">
              All
            </Tabs.Trigger>
            <Tabs.Trigger className={`rounded-full border-2 border-solid border-gray-200 px-7 py-2 ${tabValue === 'Pending' ? 'bg-gray-700 text-white' : 'text-dark bg-white'}`} value="Pending">
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger className={`rounded-full border-2 border-solid border-gray-200 px-7 py-2 ${tabValue === 'Completed' ? 'bg-gray-700 text-white' : 'text-dark bg-white'}`} value="Completed">
              Completed
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
        <div className="pt-10">
          <TodoList status={tabValue} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
