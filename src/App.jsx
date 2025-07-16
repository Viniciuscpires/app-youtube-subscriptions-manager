import { Button } from "@/components/ui/button"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={() => setCount(count + 1)}>Click me {count}</Button>
    </div>
  )
}

export default App