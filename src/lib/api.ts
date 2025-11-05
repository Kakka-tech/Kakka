const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:1337'

export interface ContactFormData {
  firstName: string
  email: string
  companyName?: string
  service: string
  budget?: string
}

export interface ApiResponse<T = any> {
  data?: T
  error?: {
    status: number
    name: string
    message: string
  }
}

export async function submitContactForm(
  formData: ContactFormData,
): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_URL}/api/requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: formData,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return {
        error: {
          status: response.status,
          name: errorData.error?.name || 'Error',
          message: errorData.error?.message || 'Failed to submit contact form',
        },
      }
    }

    const data = await response.json()
    return { data }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return {
      error: {
        status: 500,
        name: 'NetworkError',
        message: 'Failed to connect to the server. Please try again later.',
      },
    }
  }
}
