import Profile from './components/Profile'
import Statistics from './components/Statistics';
import user from './user.json';
import statisticalData from './statistical-data.json';

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
          {statisticalData.map(statistic => (
            <Statistics
          key={statisticalData.id}    
          label={statisticalData.label}
          percentage={statisticalData.percentage}
            />
          ) )}
        
      </section>
      </div> 
  )
}