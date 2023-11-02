const headerTheme = {
  centerText: {
    display: 'flex',
    justifyContent:'center'
  },
  headerMain: {
    backgroundColor: 'red',
    height: '3.5rem',
    alignItems: 'center',
  },
};

headerTheme.headerMain = {
  ...headerTheme.headerMain,
  ...headerTheme.centerText,
};

export default headerTheme;