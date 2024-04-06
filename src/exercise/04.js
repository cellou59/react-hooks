// Emoji List
// http://localhost:3000/alone/exercise/04.js
// Fork de : https://github.com/ahfarmer/emoji-search/

import * as React from 'react'
import emojiList from '../emojiList'
import Clipboard from 'clipboard'
import '../04-styles.css'

function Header({nbFound}) {
  return (
    <div className="component-header">
      <div>Recherche Emoji</div>
      <div className="reusult-found">
        {nbFound > 0 ? `${nbFound} Emojis trouvés`: 'Aucun résultat'}
      </div>
    </div>
  )
}

function SearchInput({onTextChange}) {
  return (
    <div className="component-search-input">
      <div>

        <input onChange={e => onTextChange(e.target.value)}/>
      </div>
    </div>
  )
}

function EmojiSearch() {
   const [dataEmoji, setDataEmoji] = React.useState([])
  const handleTextChange = text => {
    setDataEmoji(filterEmoji(text))
  }
  return (
    <div>
      <Header nbFound ={dataEmoji?.length}  />
      <SearchInput dataEmoji={dataEmoji} onTextChange={handleTextChange} />
      <Result data ={dataEmoji} />
    </div>
  )
}

// 🐶 Gère le 'copier dans le presse papier' grace à la librairie clipboard
// 📑 https://www.npmjs.com/package/clipboard
// 📑 Dans la documentation il est spécifié que pour utiliser il faut instancier clipboard
// 🤖 var clipboard = new ClipboardJS('.btn'); //btn nom de classe ou sera appliqué la copy.
// 📑 l'attribut 'data-clipboard-text' permet de spécifier ce qui sera copié
// 🤖 <div data-clipboard-text='Salut' /> copiera dans le press papier salut

// 📑 il faut ensuite detruire l'objet quand on en a plus besoin
// 🤖 clipboard.destroy();
function Result({data = []}) {
  React.useEffect (() => {
    const clipboard = new Clipboard('.copy-to-clipboard')
    return () =>  clipboard.destroy() 
  }, [data])
  return (
    <div className="component-emoji-results">
      {data.map(emojiData => (
        <EmojiResultRow
          key={emojiData.title}
          symbol={emojiData.symbol}
          title={emojiData.title}
        />
      ))}
    </div>
  )
}

// 🐶 Gère la copie de l'emoji en appliquant les attributs necessaires à clipboard
function EmojiResultRow({symbol, title}) {
  // 🐶 Ajoute le className 'copy-to-clipboard'
  // 🤖 className="copy-to-clipboard"

  // 🐶 Ajoute l'attribut data-clipboard-text à la div
  // 🤖 <div data-clipboard-text={symbol}
  return (
    <div className="component-emoji-result-row copy-to-clipboard" data-clipboard-text={symbol}>
      {symbol}
      <span className="title">{title}</span>
      <span className="info">Copier</span>
    </div>
  )
}

function App() {
  return <EmojiSearch />
}
export default App

// eslint-disable-next-line no-unused-vars
function filterEmoji(searchText, maxResults = 10) {
  return emojiList
    .filter(emoji => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true
      }
      if (emoji.keywords.includes(searchText)) {
        return true
      }
      if (emoji.symbol.includes(searchText)) {
        return true
      }
      return false
    })
    .slice(0, maxResults)
}
