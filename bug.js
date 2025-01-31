In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook outside of a component that is rendered within a route.  This leads to `undefined` values because useParams only works within a route's context. For example:

```javascript
// Incorrect usage
function MyComponent() {
  const { id } = useParams(); // id will be undefined here if not in a route
  return <div>MyComponent, id: {id}</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/items/:id" element={<ItemDetails />} />
    </Routes>
  );
}

function ItemDetails(){
    const {id} = useParams();
    return (
        <div>
            <h1>Item Details</h1>
            <MyComponent/>
        </div>
    );
}
```

This happens because `MyComponent` doesn't know about the route parameters.  `useParams`' context is scoped to components within the route definition.