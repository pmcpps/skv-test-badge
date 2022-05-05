# frozen_string_literal: true

require 'rubygems'
require 'selenium-webdriver'

browsers = [
  {
    browser: 'Firefox',
    browser_version: '71.0',
    name: 'Test with Firefox',
    os: 'Windows',
    os_version: '10'
  },
  {
    browser: 'Chrome',
    browser_version: '76',
    name: 'Test with Chrome',
    os: 'Windows',
    os_version: '10'
  },
  {
    browser: 'Safari',
    browser_version: '13',
    name: 'Test with safari'
  },
  {
    browser: 'Edge',
    browser_version: '18.0',
    name: 'Test with Edge',
    os: 'Windows',
    os_version: '10'

  }
]

browsers.each do |browser| 
  # Input capabilities
  caps = Selenium::WebDriver::Remote::Capabilities.new
  caps['browser'] = browser.fetch(:browser, 'Firefox')
  caps['browser_version'] = browser.fetch(:browser_version, '71.0')
  caps['os'] =  browser.fetch(:os, 'OS X')
  caps['os_version'] = browser.fetch(:os_version, 'Catalina')
  caps['resolution'] = '1024x768'
  caps['name'] = browser.fetch(:name, 'test')
  caps[:logging_prefs] = {:browser => "ALL"}
  caps['console'] = "errors"

  driver = Selenium::WebDriver.for(:remote,
                                   url: 'http://kristiangarza1:kBoF121yeasHAQQwU93c@hub-cloud.browserstack.com/wd/hub',
                                   desired_capabilities: caps)
  driver.navigate.to 'https://support.datacite.org/docs/displaying-usage-and-citations-in-your-repository'
 
  driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")

  sleep 10

  driver.save_screenshot("./tests/sample/#{caps['browser']}_#{caps['browser_version']}_sample_test.png")

  puts "Completed Sample test for #{caps['browser']}_#{caps['browser_version']}"
  driver.quit
end
