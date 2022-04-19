const productsConfig = {
    title: 'Vanus',
    introduce: 'Vanus is a serverless event platform for building Event-Driven Architecture (EDA) applications made easy. It is used to collect, store, distribute, and process events.',
    featureTxts: ['Serverless', 'Open-Source', 'Event-Driven'],
    subTitle: 'Connect the Future of Cloud-Native with Vanus',
    subIntroduce: 'The future of Cloud-Native is serverless . Vanus is the best eventing platform for the serverless era',
    subFeatureTxts: [{
        title: 'standardization',
        content: 'Unified processing of events such as customization and SaaS products Fully oriented towards standard CloudEvent'
    }, {
        title: 'Interoperability',
        content: 'Preset event source and destination Support cross-network, cross-region, cross-service connections',
    }, {
        title: 'out-of-box',
        content: 'The whole link is observable and traceable Scale down to zero and up from zero'
    }],
    casesTitle: 'Popular Use Cases',
    casesIntroduce: 'Explore some popular cases here',
    casesList: [{
        name: 'IOT',
        title: 'IoT',
        content: ['The IoT network connects a large number of devices. How to ensure the stability and security of the transmission channel? How to receive and process the massive data uploaded by the device, and ensure that the server-side instructions are issued to the device?',
            'Vanus is fully compatible with the MQTT protocol, and supports various IoT communication protocols such as CoAP/LwM2M, which ensures the integrity of the data, and can be configured to perform secondary processing of the data, and finally transmit it to the server, reflecting a strong data carrying capacity']
    }, {
        name: 'Data Integration',
        title: 'Data Integration',
        content: ['For data integration/data transmission services, local data needs to be synchronized/migrated to the cloud, which is simple and convenient to meet business scenarios such as data uploading to the cloud, data off-site disaster recovery, and business system data transfer.',
            'There is a wide variety of resources at the source and destination of the data transfer, expensive resources to continuously use, and lack of monitoring of the synchronization process.',
            'Using Vanus can simplify the complexity of data integration and process the process in a low-code way; greatly reduce resource consumption in a serverless operation mode; at the same time, the full-link data observability allows you to understand the health of the transmission in real time']
    }]
}

export default productsConfig