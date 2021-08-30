import Profile from './components/Profile/Profile'
import Statistics from './components/Statistics/Statistics';
import Friends from './components/Friends/Friends'
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
            stats={user.stats}
          />
        </section>
        
        <section>
          <Statistics title="" stats={statisticalData} />;
          {/* <Statistics stats={statisticalData} />; */}
        </section>
        
        <section>
          <Friends friends={ friends }/>
        </section>

        <section>
          <TransactionHistory items={ transactions }/>
        </section>
    </div> 
  )
};