The solution is to move the `useParams` hook *inside* the component that's rendered within the route.

```javascript
// Correct usage
function MyComponent() {
  //No need to change this
  return <div>MyComponent</div>;
}

function ItemDetails(){
    const {id} = useParams();
    return (
        <div>
            <h1>Item Details</h1>
            <MyComponent id={id}/>
        </div>
    );
}

function App() {
  return (
    <Routes>
      <Route path="/items/:id" element={<ItemDetails />} />
    </Routes>
  );
}
```

By keeping the `useParams` hook within `ItemDetails`, it has access to the route parameters. You can pass the `id` to `MyComponent` as a prop if needed.