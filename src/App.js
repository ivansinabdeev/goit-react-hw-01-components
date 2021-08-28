import Profile from './components/Profile/Profile'
import Statistics from './components/Statistics/Statistics';
import FriendListItem from './components/Friends/FriendListItem'
import TransactionHistory from './components/Transactions/TransactionHistory'


import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json'
import transactions from './transactions.json'


export default function App() {
    return( 
    <div>
        <section>
          <Profile
            avatar={user.avatar}
            name={user.name}
            tag={user.tag}
            location={user.location}
            // stats={user.stats}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
          />
        </section>
        
        <section>
          <Statistics stats={ statisticalData }/>
        </section>
        
        <section>
          <FriendListItem friends={ friends }/>
        </section>

        <section>
          <TransactionHistory items={ transactions }/>
        </section>
    </div> 
  )
};