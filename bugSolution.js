```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only when 'count' changes
    console.log('Count:', count); 
    return () => {
      // Cleanup function (optional)
      console.log('Component unmounting');
    };
  }, [count]); // Correctly specifying the dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```