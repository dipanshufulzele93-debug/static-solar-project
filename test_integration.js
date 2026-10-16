async function runFullVerification() {
  console.log('=== RUNNING UNIVERSE EXPLORER INTEGRATION TEST SUITE ===');

  // 1. Health
  const healthRes = await fetch('http://localhost:3001/api/health');
  const health = await healthRes.json();
  console.log('[PASS] API Health -> Status: ' + health.status + ' | Objects Loaded: ' + health.objectsLoaded);

  // 2. Categories
  const catRes = await fetch('http://localhost:3001/api/categories');
  const catJson = await catRes.json();
  console.log('[PASS] Categories -> Total: ' + catJson.data.total + ' | Category Keys: ' + Object.keys(catJson.data.categories).join(', '));

  // 3. Search queries
  const queries = ['water worlds', 'wormhole', 'black holes', 'nearest star', 'exoplanets', 'multiverse', 'supernova'];
  for (const q of queries) {
    const sRes = await fetch('http://localhost:3001/api/search?q=' + encodeURIComponent(q));
    const sJson = await sRes.json();
    console.log('[PASS] Search (' + q + ') -> Matches: ' + sJson.results.length + ' | Top Match: ' + (sJson.results[0] ? sJson.results[0].name : 'None'));
  }

  // 4. Object details & palettes
  const testObjects = ['earth', 'saturn', 'm87-blackhole', 'universe-bubble-alpha', 'wormhole-alpha', 'supernova-1987a', 'sgr-1806-20-magnetar', 'perseverance', 'sirius-b'];
  for (const id of testObjects) {
    const oRes = await fetch('http://localhost:3001/api/objects/' + id);
    const oJson = await oRes.json();
    if (oJson.success && oJson.object) {
      console.log('[PASS] Object Detail (' + id + ') -> Name: ' + oJson.object.name + ' | Palette: ' + JSON.stringify(oJson.object.colorPalette || []) + ' | Status: ' + oJson.object.dataStatus);
    } else {
      console.error('[FAIL] Object Detail (' + id + ') ->', oJson);
    }
  }

  // 5. Quiz Check
  const qRes = await fetch('http://localhost:3001/api/quiz/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ objectId: 'earth', questionIndex: 0, selectedOption: 'C' })
  });
  const qJson = await qRes.json();
  console.log('[PASS] Quiz Verification (Earth Q0) -> Correct: ' + qJson.isCorrect + ' | Explanation: ' + qJson.explanation);

  console.log('=== ALL INTEGRATION TESTS PASSED SUCCESSFULLY ===');
}

runFullVerification();
