export default class NavigationUtil {
  // 回到首页
  static goToHome(params) {
    const {navigation} = params;
    navigation.navigate('Home');
  }

  // 回到上一页
  static goBack(params) {
    const {navigation} = params;
    navigation.goBack();
  }
}
