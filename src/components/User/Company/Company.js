export default function Company({companyName, catchPhrase, bs}) {

    return(
      <div>
          <h3><u>User's company</u></h3>
          <h4>company name - {companyName}</h4>
          <h4>catch phrase - {catchPhrase}</h4>
          <h4>bs - {bs}</h4>
      </div>
    );
}