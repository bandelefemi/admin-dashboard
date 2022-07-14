export default function Test(){


    const abc = ["6 - 9"]
    const de = abc.toString().split(' - ')

    console.log(de[1]-de[0])
}





const [tweet, setTweet] = useState([])
const [currentTweetId, setCurrentTweetId] = useState(
    (tweet[0] && tweet[0].id) || ""
)

function createNewTweet(){
    const newTweet = {
        id: nanoid(),
        body: "say something.."
    }
    setTweet(prevTweet => [newTweet, ...prevTweet])
    setCurrentTweetId(newTweet.id)

}

function findNewTweet(){
    return tweet.find(twt => {
        return twt.id === currentTweetId
    }) || tweet[0]
}

function updateTweet(text) {
    setTweet(oldTweets => oldTweets.map(oldtweet => {
        return oldtweet.id === currentTweetId
        ? {...oldtweet, body: text} : oldtweet
    }) )
}


return(
    <main>

        <input 
            type="text"
            name="body"
            value={findNewTweet()}
            onChange={updateTweet}
            style={{width: '70%'}}
            />

        <Tweet
            tweet={tweet}
            setCurrentTweetId={setCurrentTweetId}
            newTweet={createNewTweet}
            />



    </main>
)






import produce from 'immer'

const Notes =props=> props.tweet.map(twt => <div key={twt.text}>{twt.text}</div>)

export default function App(){

    const initTweet = [{ text: 'hey world!'}, { text: 'say something..'}]

    const [tweet, setTweet] = useState(initTweet)

    const handleClick=()=> {
        const text = document.querySelector('#tweetInput').value.trim();

        if (text) {
            const nextState = produce(tweet, draftState => {
                draftState.push({text})
            })
            document.querySelector('#tweetInput').value= '';
            setTweet(nextState)
        }
    };

    return (
        <main>
            <div>
                <input
                    id='tweetInput'
                    style={{width: '60%'}}
                    type='text'
                    placeholder="tweet something.."
                    />
                <button onClick={handleClick}>
                    tweet
                </button>  

                <Notes 
                    tweet = {tweet}  
                    />
            </div>
        </main>
    )




    <div className="user-icon">
                    <Icon.Group size='large'> 
                        <Icon name='user' /> 
                        <span className="user-name">
                            
                        </span>
                    </Icon.Group>
                </div>