import React, {Component} from 'react'
import Repo from './Repo'
import topics from 'topics'
import Secrets from './Secrets'
import Filters from './Filters'
class GetRepos extends Component {
  constructor(){
    super()
    this.state = {
      allOut:'selected',
      filteredRepos:[]
    }
    this.tempState = {
      repos :[],
      filters:[],
      filtersClassNames:[]
    }

  }

  componentWillMount(){
    this.createStateFromRepos()
  }

  createStateFromRepos(){
    fetch(Secrets.url())
    .then( res => res.json())
    .then( res => {
      res.forEach( r => {
        let repo = {
          id: r.id,
          name: r.name,
          date: r.created_at,
          url: r.html_url,
          clone: r.clone_url,
          description: r.description,
          topics:[]
        }
        this.tempState.repos.push(repo)
      })
      this.tempState.repos.forEach((r,i) => this.getTopics(r.name,i))
    })
    .catch( err => console.error(err))
  }

  getTopics(repo,idx){
    let options = {
      username: Secrets.username,
      password: Secrets.psw
    }

    topics(Secrets.username +'/'+repo, options)
    .then( topics => {
        let t = topics.names
        this.tempState.repos[idx].topics = t
        this.uniqArr(t,this.tempState.filters,this.tempState.filtersClassNames)
        this.tempState.repos[idx].topicsLength = this.tempState.repos[idx].topics.length
        this.setState(this.tempState)
    })
    .catch(err => console.error(err))
  }

  uniqArr(arr,targ,css){
    arr.forEach(itm => {
      if (targ.indexOf(itm) === -1) {
        targ.push(itm)
        css.push('selected')
      }
    })
  }

  copyFn(e){
    e.target.select();
    document.execCommand("copy");
    console.log('done');
  }

  filterRepos(e) {
    this.setState({filter: e.target.value})
  }

  setActive(e){
    e = e.target
    let css = []
    let idx = Number(e.getAttribute('idx'))
    this.state.filtersClassNames.forEach(cn=>css.push(cn))


    if (e.id === 'all') {
      if (this.state.allOut === 'selected') {
        this.setState({tags: false})
      } else {
        css.forEach((c,i)=>css[i] = null)
        this.setState({
          tags: false,
          allOut:'selected',
          filtersClassNames: css
        })
      }
    } else {
      if (css[idx] === 'selected') {
        css.splice(idx, 1, null);
      } else {
        css.splice(idx, 1, 'selected');
      }
      this.setState({allOut:null,filtersClassNames: css})
    }
  }

  handleFilterClick(e){
    this.sortTopics(e)
    this.setActive(e)
  }

  sortTopics(e){
    const s = this.state,
    id = e.target.id,
    filterWasOn = e.target.classList.contains('selected');
    let ns = s;

    s.repos.forEach((r,repoIdx)=>{
      let
      l = r.topicsLength;
      r.topics.forEach(t=>{
        if (id === t) {
          if (filterWasOn) { l = l - 1 }
          else {l = l + 1}
          ns.repos[repoIdx].topicsLength = l
          this.setState(ns)
          if (ns.repos[repoIdx].topicsLength === 0) {
            console.log(r.name+' is gone');
          }
        }
      })
    })

  }



  searchBlur(e){
    if (e.target.value === '') {
      this.setState({reset:true})
      console.log('hey');
    }
  }


  render(){
    let s = this.state

    if (s.repos) {
      let items = s.repos
      if (s.reset) { items = s.repos}

      if (s.tags) {
        items = s.repos
        let tagged = []
        items.forEach( i => {
          s.tags.forEach(t=> { if (t === i.name) {
              tagged.push(i)
            }
          })
        })
        items = tagged
      }

      if (s.filter) {
        items = s.repos
        items = items.filter( items =>
          items.name.toLowerCase()
          .includes(s.filter.toLowerCase())
        )
      }

      return (
        <section>
          <Filters
            filter={this.filterRepos.bind(this)}
            filters={s.filters}
            css={s.filtersClassNames}
            allOut={s.allOut}
            sort={this.handleFilterClick.bind(this)}/>
          <ul className="repos">
            {items.map(r => <Repo
              lgh={r.topicsLength}
              key={r.id}
              id={r.id}
              topics={r.topics}
              name={r.name}
              date={r.date}
              clone={r.clone}
              username={Secrets.username}
              description={r.description}
              copyFn={this.copyFn}
              url={r.url} />)}
          </ul>
        </section>
      )
    } else {return null}
  }}

export default GetRepos
