<template>
  <div>
    <TopTime />
    <Row :gutter='8' class='mt10'>
      <Col :span='13'>
        <Row>
          <Report />
        </Row>
        <Row>
          <Follow class='mt10' />
        </Row>
        <Row>
          <EquityProject class='mt10' />
        </Row>
      </Col>
      <Col :span='11'>
        <Row>
          <Affairs />
        </Row>
        <Row class='mt10' :gutter='8'>
          <Col :span='12'><NoticeAnnouncement /></Col>
          <Col :span='12'><CommonProgress/></Col>
        </Row>
        <Row class='mt10'>
          <Alarm />
        </Row>
        <Row class='mt10'>
          <Meeting />
        </Row>
        <Row class='mt10'>
          <CompanySystem />
        </Row>
        <Row class='mt10'>
          <CompanyNews />
        </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
import TopTime from './components/top-time'
import Report from './components/report/report'
import Affairs from './components/affairs/affairs'
import Follow from './components/follow/follow'
import NoticeAnnouncement from './components/notice/notice'
import CommonProgress from './components/commonProgress/commonProgress'
import EquityProject from './components/equityProject/equityProject'
import Alarm from './components/alarm/alarm'
import Meeting from './components/meeting/meeting'
import CompanySystem from './components/companySystem/companySystem'
import CompanyNews from './components/companyNews/companyNews'
export default {
  name: 'Dashboard',
  components: {
    TopTime,
    Report,
    Affairs,
    Follow,
    NoticeAnnouncement,
    CommonProgress,
    EquityProject,
    Alarm,
    Meeting,
    CompanySystem,
    CompanyNews
  }
}
</script>
