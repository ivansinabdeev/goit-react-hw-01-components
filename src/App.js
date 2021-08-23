import Profile from './components/Profile/Profile'
import StatisticsList from './components/Statistics/StatisticsList';
import FriendList from './components/Friends/FriendList'
import TransactionHistory from './components/TransactionHistory'


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
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
          />
        </section>
        
        <section>
          <StatisticsList items={ statisticalData }/>
        </section>
        
        <section>
          <FriendList friends={ friends }/>
        </section>

        <section>
          <TransactionHistory items={ transactions }/>
        </section>
    </div> 
  )
};