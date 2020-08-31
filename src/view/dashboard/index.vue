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
export default {
  name: 'Dashboard',
  components: {
    TopTime,
    Report,
    Affairs,
    Follow,
    NoticeAnnouncement,
    CommonProgress,
    EquityProject
  }
}
</script>
