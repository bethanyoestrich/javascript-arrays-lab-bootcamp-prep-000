const app = "I don't do much."

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name)
{
   kittens.push(name)
   return kittens
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten()
{
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten()
{
  kittens.shift()
  return kittens
}
function appendKitten(name)
{
  return [...kittens, name]
}

function prependKitten(name)
{
  return [name,...kittens]
}

function removeLastKitten()
{
  return [kitten.slice(0, kitten.length - 1)]
}