import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.background
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent
    },
    paddingContainer:{
      padding: Metrics.doubleBaseMargin
    },
    section: {
      marginLeft: 15,
      marginRight: 15,
      padding: Metrics.baseMargin,
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.gray,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center'
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    },
    titleText: {
      ...Fonts.style.h2,
      //fontSize: 14,
      color: Colors.text
    },
    alignSelf:{alignSelf: 'center'},
    secondaryTextColor:{color: Colors.gray},
    mt10: {marginTop: 10},
    mt20: {marginTop: 20},
    mt30: {marginTop: 30},
    mt50: {marginTop: 50},
    mt80: {marginTop: 80},
    mt90: {marginTop: 90},
    ml7: {marginLeft: 7},    
    ml10: {marginLeft: 10},
    ml15: {marginLeft: 15},
    ml20: {marginLeft: 20},
    ml30: {marginLeft: 30},
    mr7: {marginRight: 7},
    mr10: {marginRight: 10},
    pt10: {paddingTop: 10},
    pt20: {paddingTop: 20},
    pt30: {paddingTop: 30},
    pt50: {paddingTop: 50},
    pt60: {paddingTop: 60},
    pt80: {paddingTop: 80},
    pt90: {paddingTop: 90},
    fontBold:{fontWeight: "bold"},
    fontItalic:{fontStyle: "italic"},
    
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.gray,
    alignItems: 'center',
    textAlign: 'center'
  },
}

export default ApplicationStyles
