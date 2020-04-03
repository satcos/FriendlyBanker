# Friendly Banker - Donut


## Introduction
Tool to help bankers in day to day work. Tool is created using HTML, Java Script & CSS. 
It is highly portable and compatible with most of the latest system. To increase the portability entire tool is provided as single html file.
Online version of the tool is available at this URL https://satcos.github.io/FriendlyBanker/<br/><br/>

## Usage
System have 3 tabs Denomination, Arrival and Coinware. By clicking we can navigate to the corresponding tab.
Cursor can be moved to next input field by either pressing `Enter` or `Tab`. Values in read only field will get auto updated on input change.
On pressing reset button (Round Red Button) all input will be cleared and cursor will move to first input field.<br/>
**Denomination:**  Cross validate the total amount paid by user. Enter number of notes in each denomination, System auto computes the value and total amount. 
On entering Cash Position, Balance amount is computed and colour coded based on direction of transaction. <br/>
**Arrival:**  Arrival have 3 columns, *Placed In Safe* amount available in the safe (Previous day's closing balance), *Taken From Safe* number of notes taken from safe denominationwise.
*Cash In Safe* remaining amount aviable in safe. <br/>
**CoinWare:**  CoinWare is used for end of the day calculation. *Cash Position* is number of notes collected throughout the day. *Safe* is amount available in the safe.
*Total* is total amount. For low denomination, less than 100 notes will be kept in the tray, *Tray Count & Amount* says tray case details. *Grand Total* is the total amount that goes to safe finally.
*Cash Position* at the bottom can be used to find the difference in tally.<br/><br/>

## Version
Latest stable version is available in master branch. Other version are available in the respective branches. 
Inspired from Android, used names of android system starting from version 3 Cupcake.
Version 1 and 2 are left with number and no names

## Version Log
- Version 5 Eclair
	- Fixed 200 rupees problem in Coinware tab
- Version 4 Donut
	- Enabled support for Mozilla Firefox browser
	- Element attributes are added pragmatically
	- Cleaned up the code and added lot of comments
- Version 3 Cupcake
	- Introduced names for version
	- Enabled Rs 200 note.
	- Implemented colour code for balance based on direction of flow.
- Version 2
	- Implemented CoinWare tab
- Version 1
	- Base version with Denomination & Arrival tab
