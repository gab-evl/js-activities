document.getElementById('submitBtn').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const from = document.getElementById('from').value;
  const output = document.getElementById('output');

  if (name && age && from) {
    output.textContent = `I'm, ${name} ${age} years old, and your from is ${from}`;
  } else {
    output.textContent = 'Pa Ulit po.';
  }
});