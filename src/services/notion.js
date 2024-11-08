import { Client } from '@notionhq/client'

const getNotion = () => {
  const token = localStorage.getItem('notionToken')
  if (!token) {
    throw new Error('Notion Token not found')
  }
  return new Client({ auth: token })
}

export const fetchNotes = async () => {
  try {
    const notion = getNotion()
    const databaseId = localStorage.getItem('databaseId')
    
    if (!databaseId) {
      throw new Error('Database ID not found')
    }

    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'created_time',
          direction: 'descending'
        }
      ]
    })
    return response.results
  } catch (error) {
    console.error('Error fetching notes:', error)
    return []
  }
} 