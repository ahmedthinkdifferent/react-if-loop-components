export default function ForLoop(props) {
  if (props.items.length === 0) {
    if (props.ifNoItems) {
      return props.ifNoItems;
    }
    return null;
  }
  return props.items.map((item, index) => {
    return props.forEachItem(item,index);
  })
}