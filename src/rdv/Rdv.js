import React, { Component } from 'react'
import { connect } from 'react-redux'
import { unionWith }  from 'lodash/array'
import { isEqual }  from 'lodash/lang'

import { handleGetRdvList } from './rdvActions'
import { dateDiff, offsetDays } from '../utils/date-utils'
import { filter, ALL_ID } from '../utils/filter-utils'
import { RDV_HARDCODED } from './rdv-list-hardcoded'

import HeaderTxt from '../common-ui/HeaderTxt'
import RdvList from './RdvList'
import RdvFilter from './RdvFilter'
import SVGCalendar from '../common-ui/svg/SVGCalendar'

class Rdv extends Component {

  constructor(props) {
    super(props)

    // hack to always have fresh rdv
    const diff = dateDiff(RDV_HARDCODED[0].when, new Date())
    
    const initialList = RDV_HARDCODED.map(e => {
      const newWhen = offsetDays(e.when, diff)
      return Object.assign({}, e, { when: newWhen })
    })

    this.state = {
      initialList,
      filterList: initialList,
      keyword: ALL_ID,
      topic: ALL_ID,
      city: ALL_ID,
      publicType: ALL_ID,
    }
  }

  componentDidMount() {
    const { uid } = this.props
    if (uid) 
      this.loadData()
  }

  componentDidUpdate() {
    const { uid } = this.props
    if (uid) 
      this.loadData()
  }

  loadData() {
    const { dispatch } = this.props
    dispatch(handleGetRdvList())
  }

  handleChangeKeyword = e => {
    const keyword = e.target.value
    const { topic, city, publicType } = this.state
    
    this.filterAll(keyword, topic, city, publicType)

    if (keyword) {
      this.setState({ keyword })
    }
  }
  
  handleChangeTopic = e => {
    const topic = e.target.value
    const { keyword, city, publicType } = this.state

    this.filterAll(keyword, topic, city, publicType)

    if (topic) {
      this.setState({ topic })
    }
  }
  
  handleChangeCity = e => {
    const city = e.target.value
    const { keyword, topic, publicType } = this.state
    
    this.filterAll(keyword, topic, city, publicType)
    
    if (city) {
      this.setState({ city })
    }
  }
  
  handleChangePublic = e => {
    const publicType = e.target.value
    const { keyword, topic, city } = this.state

    this.filterAll(keyword, topic, city, publicType)

    if (publicType) {
      this.setState({ publicType })
    }
  }

  filterAll = (keyword, topic, city, publicType) => {
    const { initialList } = this.state

    // filter by keyword
    let fKeyword
    if (keyword && keyword !== '' && keyword !== ALL_ID) {
      let fTitle = filter(initialList, 'title', keyword)
      let fWhere = filter(initialList, 'where', keyword)
      fKeyword = unionWith(fTitle, fWhere, isEqual)
    } else {
      fKeyword = initialList
    }
    
    // filter by topic
    let fTopic = fKeyword
    if (topic !== ALL_ID) {
      fTopic = filter(fKeyword, 'themes', topic)
    }
    
    // filter by city
    let fCity = fTopic
    if (city !== ALL_ID) {
      fCity = filter(fTopic, 'city', city)
    }
    
    // filter by publicType
    let fPublicType = fCity
    if (publicType !== ALL_ID) {
      fPublicType = filter(fCity, 'targetAudience', publicType)
    }

    const filterList = fPublicType
    
    this.setState({ filterList })
  }

  render() {
    const { filterList } = this.state
    const nbEvt = filterList.length

    return (
      <div className='rdv'>
        <HeaderTxt>
          <SVGCalendar className='svg svg--dark' />
          <div className='small-offset'>Mes Rdv</div>
        </HeaderTxt>
        <div className='bloc'>
          <h3 className='h3'>Rechercher des événements ou ateliers :</h3>
        </div>
        <RdvFilter 
          onChangeKeyword={this.handleChangeKeyword}
          onChangeTopic={this.handleChangeTopic}
          onChangeCity={this.handleChangeCity}
          onChangePublic={this.handleChangePublic}
        />
        <div className='bloc'>
          <h3 className='h3'>{nbEvt} résultats :</h3>
        </div>
        <div className='rdv__list'>
          <RdvList items={filterList} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => { 
  const { user } = state

  const uid = user ? user.uid : null

  return { 
    uid,
  }
}

export default connect(mapStateToProps)(Rdv)