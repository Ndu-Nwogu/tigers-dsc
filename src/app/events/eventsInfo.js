import oracle from "../../../oracle.png";

const events = [
    {
      date: 25,
      month: 9, //it starts from 0 so 9 is october... and 0 is january :)
      year: 2023,
      imagePath: oracle,
      details: 'Oracle Event',
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdMfPSQOcIIjOTtTpgY4BLAIoMHw9-yD19wRknqS2ST1_anRw/viewform",
    },
    {
      date: 16,
      month: 10, //it starts from 0 so 9 is october... and 0 is january :)
      year: 2023,
      imagePath: "data:image/png;base64,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",
      details: 'Google Event',
      url: "https://docs.google.com/forms/d/118Qc1eJUVsMMlsHcOo6ujGLlwcosqtD4IdJ8Fh0WBrQ/edit",
    },
    
    
    //Add more events here
  ];

  export default events