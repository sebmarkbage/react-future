// Instead of using @jsx directive we import the HTML export from react-dom
// and bind it to the JSX identifier.
import { HTML: JSX } from "react-dom";

// A simple component, that isn't stateful, can be provided as a single
// function that accepts props. This provides React with a hint that this
// component can be collapsed and that it's state doesn't need to be preserved.
// It also encourages micro-componentization instead of custom helper functions
// outside the system.
export function Button(props : { width: number, onClick: function }) {
  return (
    <div>
      Fancy button
      <button onClick={props.onClick} style={{ width: props.width }} />
    </div>
  );
}

// When named exports are used, it may be valid to have multiple components
// in the same file. Destructuring can be used to provide convenience aliasing
// and defaults to props.
export function Checkbox({ checked = true, width }) {
  return (
    <div>
      Fancy checkbox
      <input type="checkbox" checked={checked} style={{ width }} />
    </div>
  );
}
