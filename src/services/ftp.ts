// Import the necessary module
import SftpClient from "ssh2-sftp-client";

// Function to download a file from SFTP
async function downloadSynnexFeed() {
  const client = new SftpClient();
  const sftpConfig = {
    host: process.env.FTP_HOST,
    port: 22, // Default SFTP port
    username: process.env.FTP_USERNAME,
    password: process.env.FTP_PASSWORD,
  };
  const remoteFilePath = process.env.FTP_REMOTE_FILENAME;
  const localFilePath = "src/data/Synnex_Feed.zip";

  try {
    await client.connect(sftpConfig);
    await client.fastGet(remoteFilePath, localFilePath);
    console.log("File downloaded successfully");
  } catch (error) {
    console.error("Error downloading file:", error);
  } finally {
    client.end();
  }
}

export default {
  downloadSynnexFeed,
};
